import { createPost } from "@/app/firebase/posts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const id = await createPost(data);

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Something went wrong" },
      { status: 401 },
    );
  }
}
