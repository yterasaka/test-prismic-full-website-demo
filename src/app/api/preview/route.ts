export const runtime = "edge";

import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { createClient } from "@/prismicio";

/**
 * This endpoint handles previews that are launched from the Page Builder.
 */
export async function GET(request: NextRequest) {
  const client = createClient({
    fetchOptions: {
      cache: "no-store",
      next: { revalidate: 0 },
    },
  });

  // 簡略化したバージョンに変更
  return await redirectToPreviewURL({
    client,
    request,
  });
}
