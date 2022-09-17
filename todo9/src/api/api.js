export const API = () => {

const [product, setProduct] = useState([])
const [page, setPage] = useState(1)
const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

const getApi = async () => {
    let res = await fetch(url).then((data) => data.json());

    setPage(page + 1);
    setProduct([...product, ...res.products]);

    console.log(res)
};

useEffect(() => { getApi() }, []);

};