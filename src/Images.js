import React , {useEffect, useState} from 'react'

const Images = () => {
    const [data , setData] = useState([]);
    const [page , setPage] = useState(1);
    
    const fetchData = async() => {
        const apiKey = "LVFaHrUzKOASsRzENJKEA06xVMM0mQPyKpwXeXOjuIw";
        const perPage = 10;

        try{

            const url = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}&per_page=${perPage}`;
            const res  = await fetch(url);
            const data = await res.json();
            setData((prev) => [...prev , ...data]);
        }catch(err){
            console.log(err)
        }
    }

    const handleScroll = (e) => {
        const isBottom = window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight;
  
        if (isBottom) {
        setPage((prevPage) => prevPage + 1);
        }
    }


    const handleImage = (id) => {
        console.log(id);
    }

    useEffect(() => {
        fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page])
    
    
    useEffect(() => {
        window.addEventListener('scroll' , handleScroll);
        return() => {
            window.removeEventListener('scroll' , handleScroll);
         }
    },[])

  return (
    <div className='w-full h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2'>
        {data.map((item , index) => {
            return(
                <div className={`w-full h-full flex items-center justify-center ${index % 2 === 0 ? 'col-span-1' : ""} ${index % 2 === 0 ? 'row-span-2' : ""}`}  key={index} > 
                  <img src={item.urls.regular} alt={item.id} onClick={() => handleImage(item.id)} className='w-full h-full max-w-full rounded-md object-cover hover:scale-y-110 duration-150 ease-linear hover:cursor-pointer'/>
                </div>
            )
        })}
    </div>
  )
}

export default Images