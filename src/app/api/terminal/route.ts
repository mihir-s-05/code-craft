import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import util from "util";

const execAsync = util.promisify(exec);

export async function POST(req: NextRequest) {
  const { command } = await req.json();
  if (!command) {
    return NextResponse.json({ output: "", error: "No command provided" }, { status: 400 });
  }
  try {
    const { stdout, stderr } = await execAsync(command, { timeout: 10000 });
    return NextResponse.json({ output: stdout, error: stderr });
  } catch (err) {
    const e = err as { stdout?: string; stderr?: string; message?: string };
    return NextResponse.json({ output: e?.stdout || "", error: e?.stderr || e?.message });
  }
}
