import { BaseEntity } from 'src/entities/base.entity';
import { EntityDto } from '../dto/entity.dto';
import { EntityResponseDto } from '../dto/entity.response.dto';
import { IMapper } from 'src/commons/imapper.interface';

export class EntityMapper implements IMapper<BaseEntity, EntityDto, EntityResponseDto> {
    toEntity(dto: EntityDto): BaseEntity {
        return {
            id: Boolean(dto.id) ? dto.id : undefined,
            title: dto.title,
            description: dto.description,
            order: dto.order,
            createdAt: undefined,
            updatedAt: undefined,
            deletedAt: undefined,
        };
    }

    toDto(entity: BaseEntity): EntityResponseDto {
        return {
            id: entity.id,
            title: entity.title,
            description: entity.description,
            order: entity.order,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            deletedAt: entity.deletedAt,
        };
    }
}

export const entityMapper = new EntityMapper();