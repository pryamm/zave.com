export const dynamic = "force-static";
import fs from "fs";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);

  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return Response.json({
    data: data.find((c: { id: number }) => c.id === id) || null,
  });
}
