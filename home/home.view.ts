namespace $.$$ {
	const wttrUrlBase = "https://wttr.in/?format=j1"
	const weekUrlBase = "https://week.kinsle.ru"

	export class $pocket_home extends $.$pocket_home {

		@ $mol_mem
		loadData(){
			return (this.$.$mol_fetch.json( wttrUrlBase ) as wttr.RootObject)
		}

		@ $mol_mem
		loadWeek(){
			return (this.$.$mol_fetch.json( weekUrlBase ) as wttr.RootObject)
		}
		openWeather(){
			window.open('https://yandex.ru/pogoda/')
		}

		weather(){
			return this.loadData().current_condition[0].lang_ru[0].value
		}

		calculateWeek(){
			const data = new Date()
			var year = data.getFullYear()
			var month = data.getMonth()
			var today = new Date(year, month, 0).getTime()
			var now = new Date().getTime()
			var week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7))
			if (week % 2)  { 
				return "Сейчас нижняя (нечетная) неделя" 
			}  else  {  
				return "Сейчас верхняя (четная) неделя"
			} 
		}

		today(){
			const data = new $mol_time_moment().toString( 'WeekDay, DD Month YYYY' )
			return data.replace(data[0], data[0].toUpperCase())
		}

		city(){
			return this.loadData().nearest_area[0].areaName[0].value
		}

		temp(){
			return this.loadData().current_condition[0].temp_C + '°'
		}
	}

	export module wttr{
		export interface LangRu {
			value: string;
		}
	
		export interface WeatherDesc {
			value: string;
		}
	
		export interface WeatherIconUrl {
			value: string;
		}
	
		export interface CurrentCondition {
			FeelsLikeC: string;
			FeelsLikeF: string;
			cloudcover: string;
			humidity: string;
			lang_ru: LangRu[];
			localObsDateTime: string;
			observation_time: string;
			precipInches: string;
			precipMM: string;
			pressure: string;
			pressureInches: string;
			temp_C: string;
			temp_F: string;
			uvIndex: string;
			visibility: string;
			visibilityMiles: string;
			weatherCode: string;
			weatherDesc: WeatherDesc[];
			weatherIconUrl: WeatherIconUrl[];
			winddir16Point: string;
			winddirDegree: string;
			windspeedKmph: string;
			windspeedMiles: string;
		}
	
		export interface AreaName {
			value: string;
		}
	
		export interface Country {
			value: string;
		}
	
		export interface Region {
			value: string;
		}
	
		export interface WeatherUrl {
			value: string;
		}
	
		export interface NearestArea {
			areaName: AreaName[];
			country: Country[];
			latitude: string;
			longitude: string;
			population: string;
			region: Region[];
			weatherUrl: WeatherUrl[];
		}
	
		export interface Request {
			query: string;
			type: string;
		}
	
		export interface Astronomy {
			moon_illumination: string;
			moon_phase: string;
			moonrise: string;
			moonset: string;
			sunrise: string;
			sunset: string;
		}
	
		export interface LangRu2 {
			value: string;
		}
	
		export interface WeatherDesc2 {
			value: string;
		}
	
		export interface WeatherIconUrl2 {
			value: string;
		}
	
		export interface Hourly {
			DewPointC: string;
			DewPointF: string;
			FeelsLikeC: string;
			FeelsLikeF: string;
			HeatIndexC: string;
			HeatIndexF: string;
			WindChillC: string;
			WindChillF: string;
			WindGustKmph: string;
			WindGustMiles: string;
			chanceoffog: string;
			chanceoffrost: string;
			chanceofhightemp: string;
			chanceofovercast: string;
			chanceofrain: string;
			chanceofremdry: string;
			chanceofsnow: string;
			chanceofsunshine: string;
			chanceofthunder: string;
			chanceofwindy: string;
			cloudcover: string;
			humidity: string;
			lang_ru: LangRu2[];
			precipInches: string;
			precipMM: string;
			pressure: string;
			pressureInches: string;
			tempC: string;
			tempF: string;
			time: string;
			uvIndex: string;
			visibility: string;
			visibilityMiles: string;
			weatherCode: string;
			weatherDesc: WeatherDesc2[];
			weatherIconUrl: WeatherIconUrl2[];
			winddir16Point: string;
			winddirDegree: string;
			windspeedKmph: string;
			windspeedMiles: string;
		}
	
		export interface Weather {
			astronomy: Astronomy[];
			avgtempC: string;
			avgtempF: string;
			date: string;
			hourly: Hourly[];
			maxtempC: string;
			maxtempF: string;
			mintempC: string;
			mintempF: string;
			sunHour: string;
			totalSnow_cm: string;
			uvIndex: string;
		}
	
		export interface RootObject {
			current_condition: CurrentCondition[];
			nearest_area: NearestArea[];
			request: Request[];
			weather: Weather[];
		}
	}
}
