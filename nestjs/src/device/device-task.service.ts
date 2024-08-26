import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDeviceDto } from './dto/create-device.dto';
import { Device } from './entities/device.entity';

@Injectable()
export class DeviceTaskService {
    constructor(
        @InjectRepository(Device) private readonly device: Repository<Device>,
    ) {}

    @Cron(CronExpression.EVERY_SECOND)
    handleCron() {
        const os = require('os');
        const createDeviceDto = new CreateDeviceDto();

        const cores = os.cpus().map(({ model, ...rest }) => {
            return rest;
        });
        createDeviceDto.cpu = JSON.stringify(cores);
        createDeviceDto.model = os.cpus()[0].model;
        createDeviceDto.uptime = os.uptime();
        createDeviceDto.totalmem = os.totalmem();
        createDeviceDto.freemem = os.freemem();

        return this.device.save(createDeviceDto);
    }

    @Cron(CronExpression.EVERY_MINUTE)
    clearCron() {
        return this.device.query(
            // 删除创建时间早于当前时间减去5分钟的记录
            'delete from device where create_time < now() - interval 5 minute',
        );
    }
}
