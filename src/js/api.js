
const API_KEY = '0GK7J79-A39488W-JX4G005-14R07MK';

const api = () => {

    return {

        /*get Beers limit 10*/
        getBeers: async (search) => {
            try {

                const config = {
                    method: 'get',
                    url: `https://beerflix-api.herokuapp.com/api/v1/beers/?search=stout&limit=10`,
                    headers: { 'X-API-KEY': API_KEY }
                };

                const res = await axios(config);

                console.log(res.data);

            }catch(err) {

                console.log(err.message);
                throw err;
            }
        },

    };
};


//api().getBeers();