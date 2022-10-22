"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventEntity = {
    type: 'event',
    getEventType() {
        return 'create';
    },
};
const showEntity = {
    type: 'content',
    getContentType() {
        return 'show';
    },
};
const entityHash = {
    show: showEntity,
    event: eventEntity,
};
const entityTypeFactory = (type) => {
    const entity = entityHash[type];
    if (entity.type === 'event')
        return entity.getEventType();
    return entity.getContentType();
};
const type = entityTypeFactory('event');
console.log(type);
