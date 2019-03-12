class SbifService {

    constructor({ got }){
        this.got = got;

        this.getBanks = this.getBanks.bind(this);
    }

    async getBanks(req, res) {
        const { body } = await this.got('http://api.sbif.cl/api-sbifv3/recursos_api/perfil/instituciones?apikey=64331cc1edd7f8da01e22510c39e910a5d59936a&formato=json');   
        res.send(body);   
    }


}

module.exports = SbifService;