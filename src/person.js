export const isAdult = (x) =>
{
    if (x >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
}

export const canDrink = (x) => (x >= 21 ? "true": "false");

export default (x) => x >= 65;


