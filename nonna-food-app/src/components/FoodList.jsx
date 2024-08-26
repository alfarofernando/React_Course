

export default function FoodList(foodData,setFoodData){
    return(
        <div>
            {foodData.map((food)=>(
                <div>
                    <h1>{food.title}</h1>
                </div>
            ))}
        </div>
    );
}