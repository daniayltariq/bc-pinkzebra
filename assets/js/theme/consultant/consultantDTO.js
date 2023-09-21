export class ConsultantDTO {
    /**
     * @param consultant - The consultant parameter is an object that contains information about a
     * consultant, the API responses must be similar for all consultant queries
     */
    constructor(consultant) {
        const {
            first_name, last_name, rep_img, state, city, website, repID, phone, email,
        } = consultant.rep;
        const { available_dates } = consultant;
        const { parties } = consultant;

        this.name = `${first_name} ${last_name}`;
        this.img = rep_img || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
        this.state = state;
        this.city = city;
        this.parties = parties;
        this.available_dates = available_dates;
        this.website = website;
        this.repID = repID;
        this.phone = phone;
        this.email = email;
    }
}
