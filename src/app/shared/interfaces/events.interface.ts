 interface INameModel {
  en: string;
  ru: string;
}

 interface IShortNameModel {
  en: string;
  ru: string;
}

 interface IDescriptionModel {
  en: string;
  ru: string;
}

 interface IShortDescriptionModel {
}

 interface IExtendedPropsModel {
}

 interface IPosterModel {
  name: string;
  path: string;
  size: number;
  type: string;
  color: number[];
  width: number;
  height: number;
  palette: number[][];
  uploaded_at: number;
}

 interface IMediumModel {
  name: string;
  path: string;
  size: number;
  type: string;
  color: number[];
  width: number;
  height: number;
  palette: number[][];
  uploaded_at: any;
}

 interface IAppnameModel {
}

 interface IName2Model {
  en: string;
  ru: string;
}

 interface IAddressModel {
  ru: string;
}

 interface IMediaInfoModel {
  name: string;
  path: string;
  size: number;
  type: string;
  color: number[];
  width: number;
  height: number;
  palette: number[][];
  uploaded_at: any;
}

 interface IShortName2Model {
  en: string;
  ru: string;
}

 interface IHallModel {
  id: number;
  name: IName2Model;
  tabs?: any;
  tags: string[];
  uuid: string;
  poster?: any;
  address: IAddressModel;
  website?: any;
  contacts?: any;
  location?: any;
  is_active: boolean;
  spot_uuid: string;
  is_deleted: boolean;
  media_info: IMediaInfoModel[];
  short_name: IShortName2Model;
  work_hours?: any;
  description?: any;
  eticket_name?: any;
}

 interface IName3Model {
  en: string;
  ru: string;
}

 interface IAddress2Model {
  en: string;
  ru: string;
}

 interface IShortName3Model {
  en: string;
  ru: string;
}

 interface IDescription2Model {
  en: string;
  ru: string;
}

 interface ISpotModel {
  id: number;
  name: IName3Model;
  tabs?: any;
  tags: string[];
  uuid: string;
  poster?: any;
  address: IAddress2Model;
  website?: any;
  contacts?: any;
  location?: any;
  city_uuid: string;
  is_active: boolean;
  is_deleted: boolean;
  media_info?: any;
  short_name: IShortName3Model;
  work_hours?: any;
  description: IDescription2Model;
  eticket_name?: any;
}

 interface IName4Model {
  en: string;
  ru: string;
}

 interface ITagModel {
  name: IName4Model;
  type: string;
  uuid: string;
  color?: any;
}

 interface IPriceValueModel {
  id: number;
  uuid: string;
  amount: number;
  is_active: boolean;
  is_base_price: boolean;
  schedule_uuid: string;
  amount_currency: string;
  base_group_price?: any;
  price_category_uuid: string;
}

 interface INearestScheduleModel {
  id: number;
  end: string;
  Hall: IHallModel;
  Spot: ISpotModel;
  Tags: ITagModel[];
  tags: string[];
  uuid: string;
  begin: string;
  duration: string;
  end_time: Date;
  own_tags: any[];
  hall_uuid: string;
  is_active: boolean;
  spot_uuid: string;
  begin_time: Date;
  event_uuid: string;
  is_deleted: boolean;
  PriceValues: IPriceValueModel[];
  is_for_sale: boolean;
  is_sold_out: boolean;
  has_geometry: boolean;
  is_season_head: boolean;
  is_season_part: boolean;
  season_schedules?: any;
  season_event_uuid?: any;
  hall_geometry_uuid: string;
  price_modifier_uuid?: any;
  organizer_legal_uuid?: any;
}

 interface IName5Model {
  en: string;
  ru: string;
}

 interface IEventTagModel {
  name: IName5Model;
  type: string;
  uuid: string;
  color?: any;
}

 interface IName6Model {
  en: string;
  ru: string;
}

 interface IScheduleTagModel {
  name: IName6Model;
  type: string;
  uuid: string;
  color?: any;
}

export interface  IEventModel {
  uuid: string;
  is_active: boolean;
  is_deleted: boolean;
  product_type: string;
  product_category_uuid?: any;
  tags: string[];
  name: INameModel;
  short_name: IShortNameModel;
  description: IDescriptionModel;
  short_description: IShortDescriptionModel;
  extended_props: IExtendedPropsModel;
  poster: IPosterModel;
  media: IMediumModel[];
  rating?: any;
  pg_rating: string;
  duration: string;
  is_season: boolean;
  season_label?: any;
  season_number?: any;
  _classname: string;
  posters?: any;
  tabs: any[];
  appname: IAppnameModel;
  id: number;
  page_components?: any;
  date: string;
  NearestSchedule: INearestScheduleModel;
  EventTags: IEventTagModel[];
  ScheduleTags: IScheduleTagModel[];
}

export interface IEventsModel {
  date: string;
  events: IEventModel[];
}
