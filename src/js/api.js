
const API_KEY = '0GK7J79-A39488W-JX4G005-14R07MK';

const api = () => {

    return {
        /*get Beers limit 10*/
        getBeers: async (search) => {
            try {
                const config = {
                    method: 'get',
                    url: `https://beerflix-api.herokuapp.com/api/v1/beers/?search=ale&limit=10`,
                    headers: { 'X-API-KEY': API_KEY }
                };
                const resp = await axios(config);

                /*if code distintc 200 or 300:*/
                if(resp.config.validateStatus == false){
                   throw new Error(`Error retrieving beers. Code error: ${resp.status}`);
                }

                const dataBeers = await resp.data.beers;
                return dataBeers;

            }catch(err) {
                console.log(err.message);
                throw err;
            }
        },
    };
};

export default api;