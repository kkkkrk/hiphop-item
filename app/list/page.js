import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"

export const revalidate = 3600;

async function getProducts() {
    try {
        const client = await connectDB;
        const db = client.db('yes24_db');

        // 'products' 컬렉션에서 데이터 가져오기
        const products = await db
            .collection('music_albums')
            .find({})
            .limit(200) // 필요한 만큼 제한
            .toArray();

        // MongoDB의 _id 객체를 문자열로 변환 (직렬화 문제 방지)
        return products.map((product) => ({
            ...product,
            _id: product._id.toString(),
            // 필요한 경우 날짜 객체 등도 여기서 문자열로 변환해야 함
        }));
    } catch (e) {
        console.error(e);
        throw new Error('데이터 로드 실패');
    }
}

export default async function List() {
    // const client = await connectDB;
    // const db = client.db("yes24_db")
    // let result = await db.collection('music_albums').find().toArray()
    const products = await getProducts();
    console.log('000000000000000')
    console.log(products)
    return (
        <div>
            <h4>상품목록</h4>
        </div>
    )
}