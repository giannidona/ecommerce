import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { name, description, price, stock, tags } = await req.json();

  if (!name || !price || !stock) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        name,
        description,
        price,
        stock,
        tags,
      },
    ])
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

export async function GET() {
  const products = await supabase.from("products").select();
  console.log(products);

  return NextResponse.json(products, { status: 201 });
}
