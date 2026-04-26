
export type CurrentWeatherType = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  dt: number;
};


export type ForecastItemType = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  weather: Array<{
    id: number;
    description: string;
    icon: string;
  }>;
  dt_txt: string;
};


export type ForecastResponseType = {
  list: Array<ForecastItemType>;
  city: {
    name: string;
    country: string;
  };
};