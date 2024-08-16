import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './controllers/user.controller';

import { User, UserSchema } from './entities/user.entity';

import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [MongooseModule, UserService],
})
export class UserModule {}