import { Injectable } from '@nestjs/common';

@Injectable()
export class DeviceService {
    findAll() {
        return `This action returns all device`;
    }
}
