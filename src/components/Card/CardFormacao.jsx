export default function CardFormacao ({ handleChange, img, title, curso, instituicao, periodo, nota }) {
    return (
        <>
            <div className='card'>
                <div className='formacao'>
                    <div className='img-card'>
                        <img onChange={handleChange} src={img} alt="Imagem Card" />
                    </div>
                    <div className='info-card'>
                        <div className='titulo-card'>
                            <h3 onChange={handleChange}>{title}</h3>
                        </div>
                        <div className='dados-card'>
                            <p onChange={handleChange}>{curso}</p>
                            <p onChange={handleChange}>{instituicao}</p>
                            <p onChange={handleChange}>{periodo}</p>
                            <p onChange={handleChange}>{nota}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}