import { prisma } from "@instamate/db";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export const POST = async (req: NextRequest) => {
  try {
    const session = await auth();
    if (!session?.user)
      return new NextResponse(
        JSON.stringify({ success: false, msg: "not authorized" }),
        { status: 401 },
      );

    const { accessToken, longLivedToken } = await req.json();

    await prisma.user.update({
      where: {
        email: session?.user?.email as string,
      },
      data: {
        instagramAccessToken: accessToken,
        instagramRefreshToken: longLivedToken,
      },
    });
    return new NextResponse(
      JSON.stringify({ success: true, msg: "successfully stored tokens" }),
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ success: false, msg: error }), {
      status: 500,
    });
  }
};
