import { Cache } from 'aws-amplify'

export const matchesCountText = (count) => { return count === 1 ? `1 match` : `${count} matches`; }
export const checkForOwner = (item) => { return item.Owner ? item.Owner.alias : "" };
export const checkForInitiative = (item) => { return item.Initiative ? item.Initiative.title : "" };
export const checkForOrganization = (item) => { return item.Organization ? item.Organization.name : "" };
export const checkForBucket = (item) => { return item.Initiative ? item.Initiative.bucket : "" };
export const checkForRank = (item) => { return item.Initiative ? item.Initiative.rank : "" };
export const checkForGoal = (item) => { return item.Goal ? item.Goal.title : "" };
export const checkForSponsor = (item) => { return item.Sponsor ? item.Sponsor.alias : "" }
export const checkForManager = (item) => { return item.Manager ? item.Manager.alias : "" }
export const checkForTheme = (item) => { return item.Theme ? item.Theme.title : "" }

export const modesFilter = (item, text) => {
    if (!text || text === '') return true;
    text = text.toLowerCase().replace(/\s/g, "");
    var restf = true;

    if (!text.startsWith('&')) {
        try {
            restf = (
                ((item.title) ? item.title.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.description) ? item.description.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.funding) ? item.funding.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.status) ? item.status.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.class) ? item.class.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.bucket) ? item.bucket.toLowerCase().indexOf(text) >= 0 : false) ||
                ((item.Owner) ?
                    (item.Owner.alias.toLowerCase().indexOf(text) >= 0 ||
                        item.Owner.name.toLowerCase().indexOf(text) >= 0) : false) ||
                ((item.Manager) ?
                    (item.Manager.alias.toLowerCase().indexOf(text) >= 0 ||
                        item.Manager.name.toLowerCase().indexOf(text) >= 0) : false) ||
                ((item.Sponsor) ?
                    (item.Sponsor.alias.toLowerCase().indexOf(text) >= 0 ||
                        item.Sponsor.name.toLowerCase().indexOf(text) >= 0) : false) ||
                ((item.Initiative) ?
                    (item.Initiative.title.toLowerCase().indexOf(text) >= 0 ||
                        item.Initiative.bucket.toLowerCase().indexOf(text) >= 0) : false) ||
                ((item.Organization) ? item.Organization.name.toLowerCase().indexOf(text) >= 0 : false)
            );
            return restf
        } catch (e) {
            return false
        }
    }

    try {
        const cond = text.split("&");
        if (cond.length > 0) {
            cond.forEach((it) => {
                var res = true;
                if (it !== '') {
                    res = false;
                    const mode = it.split(":");
                    if (mode.length > 1) {
                        if (mode[0] === "p" || mode[0] === "per" || mode[0] === "person") {
                            const test = mode[1].split(",");
                            test.forEach((it) => {
                                console.log(`i: ${it}`);
                                if (it !== '') {
                                    if (typeof (item.Sponsor) !== "undefined") {
                                        res = res || (
                                            ((item.Sponsor) ? item.Sponsor.alias.toLowerCase().startsWith(it) : false) ||
                                            ((item.Sponsor) ? item.Sponsor.name.toLowerCase().startsWith(it) : false)
                                        );
                                    } else if (typeof (item.Manager) !== "undefined") {
                                        res = res || (
                                            ((item.Manager) ? item.Manager.alias.toLowerCase().startsWith(it) : false) ||
                                            ((item.Manager) ? item.Manager.name.toLowerCase().startsWith(it) : false)
                                        );
                                    } else if (typeof (item.Owner) !== "undefined") {
                                        res = res || (
                                            ((item.Owner) ? item.Owner.alias.toLowerCase().startsWith(it) : false) ||
                                            ((item.Owner) ? item.Owner.name.toLowerCase().startsWith(it) : false)
                                        );
                                    }
                                }
                            });
                        } else if (mode[0] === "f" || mode[0] === "fun" || mode[0] === "funding") {
                            const test = mode[1].split(",");
                            test.forEach((it) => {
                                if (it !== '')
                                    res = res || (item.funding.toLowerCase().startsWith(it))
                            });
                        } else if (mode[0] === "b" || mode[0] === "buc" || mode[0] === "bucket") {
                            const test = mode[1].split(",");
                            test.forEach((it) => {
                                if (it !== '')
                                    res = res || (
                                        ((item.Initiative) ? item.Initiative.bucket.toLowerCase().startsWith(it) : false) ||
                                        ((item.bucket) ? item.bucket.toLowerCase().startsWith(it) : false)
                                    );
                            });
                        } else if (mode[0] === "o" || mode[0] === "org" || mode[0] === "organization") {
                            const test = mode[1].split(",");
                            test.forEach((it) => {
                                if (it !== '')
                                    res = res || (
                                        ((item.Organization) ? item.Organization.name.toLowerCase().startsWith(it) : false)
                                    );
                            });
                        }
                    }
                }
                restf = restf && res
            });
            return restf;
        }
    } catch (e) {
        return false
    }
};

export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleString();
    return formattedDate;
}
export const createLabelFunction = (columnName) => {
    return ({ sorted, descending }) => {
        const sortState = sorted ? `sorted ${descending ? 'descending' : 'ascending'}` : 'not sorted';
        return `${columnName}, ${sortState}.`;
    };
}
export const checkForColor = (item) => {
    var org = Cache.getItem("activeOrg");
    if (!org) return "text-status-inactive";

    if (item.funding === "NA") return "text-status-inactive";
    if (item.sum > org.incTarget) return "text-status-error";
    if (item.sum > org.headcount) { return "text-status-warning" } else return "text-status-success"
}
export const sortByFundingAndRank = (a, b) => {

    if (a.funding === b.funding) return a.rank - b.rank;

    if (a.funding === "CUT" && b.funding !== "NA") return 1;
    if (b.funding === "CUT" && a.funding !== "NA") return -1;

    return (a.funding < b.funding) ? -1 : (a.funding > b.funding) ? 1 : 0;

}
