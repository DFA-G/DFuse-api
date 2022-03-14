import {
  ConsoleStream,
  every,
  FileStream,
  Logger,
  TokenReplacer,
} from "./deps.ts";

// Small hack to not throw even if dir already exists
Deno.mkdirSync("./logs", { recursive: true });

export function createLogger(logfile: string) {
  const c = new ConsoleStream()
    .withMinLogLevel(20)
    .withFormat(
      new TokenReplacer()
        .withDateTimeFormat("YYYY-MM-DD hh:mm:ss:SSS")
        .withColor(true),
    ).withLogHeader(false);

  const file = new FileStream(`./logs/${logfile}.log`)
    .withMinLogLevel(30)
    .withBufferSize(1024 * 4)
    .withFormat(
      new TokenReplacer()
        .withDateTimeFormat("YYYY-MM-DD hh:mm:ss:SSS")
        .withColor(false),
    ).withLogFileInitMode("append")
    .withLogFileRotation(every(1).minutes()).withLogHeader(false);

  file.setup();

  return new Logger().addStream(file).addStream(c);
}
