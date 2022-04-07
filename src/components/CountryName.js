const CountryName = ({country}) => {
    return (
        <>
            <div>
                <h3>{country.name.common}</h3>
            </div>
        </>
  );
};

export default CountryName