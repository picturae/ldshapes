class BaseShapeDto {
  id: URL;
  original: URL;
  label: LabelDto[];
  order?: number;
  constructor(bodyValue: any = {}) {
    //set default values
    this.id = bodyValue.id;
    this.original = bodyValue.id;
    this.label = bodyValue.label;
    this.order = bodyValue.order;
    if (bodyValue.label === undefined) {
      this.label = [];
    }
  }
}

export class CreateShapeDto {
  name: string;
  original: any;
  shape: ShapeDto;
  prefix: PrefixDto[];
  group: GroupDto[];
  property: PropertyDto[];
  constructor() {
    //set default values
    this.name = '';
    this.original = '';
    this.shape = new ShapeDto();
    this.prefix = [];
    this.group = [];
    this.property = [];
  }
}

export class ShapeDto extends BaseShapeDto {
  identifier: string;
  targetClass: string;
  memorixCompatible: boolean;
  comment: string;
  closed: boolean;
  ignoredProperties: string[];
  constructor(bodyValue: any = {}) {
    super(bodyValue);
    this.identifier = bodyValue.identifier;
    this.targetClass = bodyValue.targetClass;
    this.memorixCompatible = bodyValue.memorixCompatible;
    this.comment = bodyValue.comment;
    this.closed = bodyValue.closed;
    this.ignoredProperties = bodyValue.ignoredProperties;
  }
}

export class GroupDto extends BaseShapeDto {
  constructor(bodyValue: any = {}) {
    super(bodyValue);
  }
}

export class PropertyDto extends BaseShapeDto {
  path: string;
  group: string;
  minCount: number;
  maxCount: number;
  datatype: string;
  constructor(bodyValue: any = {}) {
    super(bodyValue);
    this.path = bodyValue.path;
    this.group = bodyValue.group;
    this.minCount = bodyValue.minCount;
    this.maxCount = bodyValue.maxCount;
    this.datatype = bodyValue.datatype;
  }
}

export class PrefixDto {
  id: URL;
  prefix: string;

  constructor(bodyValue: any = {}) {
    this.id = bodyValue.id;
    this.prefix = bodyValue.prefix;
  }
}

export class LabelDto {
  title: string;
  language: string;
  constructor(bodyValue: any = {}) {
    this.title = bodyValue.title;
    this.language = bodyValue.language;
  }
}
