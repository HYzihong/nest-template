import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import config from "src/config/app.config";
@Module({
  imports: [
    // ConfigModule.forRoot({
    //   ignoreEnvFile: true, // 忽略 .env 文件
    //   isGlobal: true,
    //   load: [getConfig],
    // }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
