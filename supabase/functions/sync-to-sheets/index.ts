import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface LeadRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  created_at: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const payload = await req.json();
    console.log("Received payload:", payload);

    const record = payload.record as LeadRequest;

    const googleSheetsWebhookUrl = Deno.env.get("GOOGLE_SHEETS_WEBHOOK_URL");

    if (!googleSheetsWebhookUrl) {
      console.error("GOOGLE_SHEETS_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({
          error: "Google Sheets webhook URL not configured",
          message: "Please set GOOGLE_SHEETS_WEBHOOK_URL environment variable"
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const sheetData = {
      timestamp: new Date(record.created_at).toLocaleString("ru-RU", {
        timeZone: "Europe/Moscow",
      }),
      name: record.name,
      email: record.email,
      phone: record.phone || "",
      company: record.company || "",
      id: record.id,
    };

    console.log("Sending data to Google Sheets:", sheetData);

    const response = await fetch(googleSheetsWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetData),
    });

    const responseText = await response.text();
    console.log("Google Sheets response:", responseText);

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status} - ${responseText}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead synced to Google Sheets",
        data: sheetData,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in sync-to-sheets function:", error);

    return new Response(
      JSON.stringify({
        error: error.message,
        details: "Failed to sync lead to Google Sheets",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
