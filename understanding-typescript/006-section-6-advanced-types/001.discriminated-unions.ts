interface IEventEntity {
  type: 'event';
  getEventType(): string;
}

interface IContentItemEntity {
  type: 'content';
  getContentType(): string;
}

const eventEntity: IEventEntity = {
  type: 'event',
  getEventType() {
    return 'create';
  },
};

const showEntity: IContentItemEntity = {
  type: 'content',
  getContentType() {
    return 'show';
  },
};

const entityHash: { [key: string]: IContentItemEntity | IEventEntity } = {
  show: showEntity,
  event: eventEntity,
};

const entityTypeFactory = (type: string) => {
  const entity = entityHash[type];

  if (entity.type === 'event') return entity.getEventType();
  return entity.getContentType();
};

const type = entityTypeFactory('event');
console.log(type);

export { };
