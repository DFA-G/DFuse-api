import {
  ConsoleStream,
  every,
  FileStream,
  Logger,
  TokenReplacer,
} from "./deps.ts";

// Small hack to not throw even if dir already exists
Deno.mkdirSync("./logs", { recursive: true });

export function createLogger(dir: string) {
  Deno.mkdirSync("./logs/" + dir, { recursive: true });
  const c = new ConsoleStream()
    .withMinLogLevel(10)
    .withFormat(
      new TokenReplacer()
        .withDateTimeFormat("YYYY-MM-DD hh:mm:ss:SSS")
        .withColor(true),
    ).withLogHeader(false);

  const file = new FileStream(`./logs/${dir}.log`)
    .withMinLogLevel(10)
    .withBufferSize(10)
    .withFormat(
      new TokenReplacer()
        .withDateTimeFormat("YYYY-MM-DD hh:mm:ss:SSS")
        .withColor(false),
    ).withLogFileInitMode("append")
    .withLogFileRotation(every(1).minutes()).withLogHeader(false);

  file.setup();

  return new Logger().addStream(file).addStream(c);
}
