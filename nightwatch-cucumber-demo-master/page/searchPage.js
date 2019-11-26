const { client } = require('nightwatch-cucumber');

const searchPage = {
    closePopUp: () => {
        return client.click('.div_close');
    },

    loginByCode: () => {
        return client
            .pause(1000)
            .click('#typeCode')
            .setValue('#lumSaude_pr1', '598')
            .setValue('#lumSaude_ci1', '00373')
            .setValue('#lumSaude_ci2', '0002')
            .setValue('#lumSaude_ci3', '1594')
            .setValue('#lumSaude_ci4', '0015')
            .setValue('#senha', '665625')
            .click('#Form_8A6164A961DEAA7F0161DEBB127E630D > div > div.login-password > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > button');
    },

    openSearchNetwork: () => {
        client.click('#LumNav > li:nth-child(5) > a');
        return client.click('#LumNav > li:nth-child(5) > ul > li:nth-child(1) > a');
    },

    verifyNameLoged: (name) => {
        return client.pause(2000).expect.element('#nameCookie').text.to.equal(name);
    },

    serchByLocality: () => {
        return client
            .element.click('.img-btn-pesquisa');
    },

    clickSearchButton: () => {
        return client.click('#btnBuscarPorBairro');
    },

    fillCategory: (category) => {
        return client.setValue('#Categoria', category);
    },

    fillState: (state) => {
        return client.setValue('#estado', state);
    },

    fillCity: (city) => {
        return client.setValue('#municipio', city);
    },

    fillSpecialty: (specialty) => {
        return client.setValue('#municipio', specialty);
    },

    verifyCityResult: (city) => {
        return client.pause(1000).expect.element('.endereco').text.to.equal(city);
    }
}

module.exports = searchPage;