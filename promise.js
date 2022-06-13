const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    try {
        let dataIXX = await promiseTheaterIXX();
        let dataVGC = await promiseTheaterVGC();
        let dataEmosi = [...dataIXX, ...dataVGC];

        let totalEmosi = dataEmosi.filter(
            (hasilEmosi) => hasilEmosi.hasil === emosi
        ).length;

        return totalEmosi;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    promiseOutput,
};
