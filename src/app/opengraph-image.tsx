import { ImageResponse } from "next/og";

import { getSiteUrl } from "@/lib/site-url";

export const alt = "Sulav Karki — Full Stack Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const base = getSiteUrl();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050508",
          backgroundImage:
            "linear-gradient(145deg, #0c0c12 0%, #050508 40%, #0a0a0f 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
            padding: 48,
          }}
        >
          <div
            style={{
              width: 132,
              height: 132,
              borderRadius: 32,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fafafa",
              fontSize: 56,
              fontWeight: 700,
              fontFamily:
                'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
              letterSpacing: "-0.04em",
            }}
          >
            SK
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 12,
              maxWidth: 720,
            }}
          >
            <div
              style={{
                fontSize: 58,
                fontWeight: 600,
                color: "#fafafa",
                fontFamily:
                  'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Sulav Karki
            </div>
            <div
              style={{
                fontSize: 30,
                color: "#a1a1aa",
                fontFamily:
                  'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
              }}
            >
              Full Stack Engineer · Portfolio
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 20,
                color: "#71717a",
                fontFamily:
                  'ui-sans-serif, system-ui, "Segoe UI", sans-serif',
              }}
            >
              {base.replace(/^https:\/\//, "")}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
