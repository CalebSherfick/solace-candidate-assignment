import { toAdvocateDTO } from "@/app/lib/dto/advocate";
import db from "../../../db";
import { advocates } from "../../../db/schema";

export async function GET() {
  const data = await db.select().from(advocates);

  // If no advocates, return an empty array
  if (data.length === 0) {
    return Response.json({ advocates: [] });
  }

  // Map the API Response to DTO make it easier to use
  const formattedData = data.map(toAdvocateDTO);

  return Response.json({ advocates: formattedData });
}
