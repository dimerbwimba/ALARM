const AdresseMap = ()=>{
    return (
        <>
        <div className=" border">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63809.78194635406!2d29.144101931250002!3d-1.676049300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0fc90ea703f5%3A0x5cca195c6e33378a!2sALARM%20Pastors%20Office%20Goma!5e0!3m2!1sen!2scd!4v1720815286842!5m2!1sen!2scd" 
            width="600" 
            height="450" 
            style={{border:0}} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default AdresseMap;