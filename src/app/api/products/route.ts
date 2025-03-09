import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { name, description, price, stock, tags, images } = await req.json();

  // Validar los datos antes de hacer la inserción
  if (!name || !price || !stock) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Realizar la inserción en la tabla products
  const { data, error } = await supabase
    .from("products")
    .insert([
      {
        name,
        description,
        price,
        stock,
        tags: tags.split(",").map((tag) => tag.trim()), // Convertir a array de tags
        images: images.split(",").map((image) => image.trim()), // Convertir a array de imágenes
      },
    ])
    .single(); // Insertamos un solo producto

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
