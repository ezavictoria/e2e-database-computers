class addNewComputerElements {

    homePageUrl = () => {
        return 'https://computer-database.gatling.io/computers'
    }

    addButton = () => {
        return '#add'
    }

    nameField = () => {
        return '#name'
    }

    introducedField = () => {
        return '#introduced'
    }

    discontinuedField = () => {
        return '#discontinued'
    }

    companyDropdown = () => {
        return '#company'
    }
    
    createButton = () => {
        return 'input[value="Create this computer"]'
    }

    alertMsg = () => {
        return '.alert-message'
    }

    searchBox = () => {
        return '#searchbox'
    }

    searchButton = () => {
        return '#searchsubmit'
    }
    
    computersTable = () => {
        return '.computers'
    }

    errorMsg = () => {
        return 'span.help-inline'
    }
    
}

export default addNewComputerElements;
