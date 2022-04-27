import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 8w_f_pTRzbaCO2aHL3L4YJd-cKtfJdNVGxnk88ZaWkg'
    }
});
