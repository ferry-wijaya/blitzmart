export interface IMapper<TEntity, TDto, TResponeDTO = TDto> {
    toEntity?(dto: TDto, ...args: unknown[]): TEntity;
    toDto?(entity: TEntity, ...args: unknown[]): TResponeDTO;
}
