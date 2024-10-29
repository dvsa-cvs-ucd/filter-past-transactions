//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const path = require('path')
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.get('/remove-filter', (req, res) => {
  req.session.data.activeFilters = req.session.data.activeFilters.filter(item =>  item !== req.query.filter)
  res.redirect('/facility-management/search-past-transactions/search-results')
})

router.get('/apply-filters', (req, res) => {
  req.session.data.activeFilters = req.session.data['type'] ?? []
  res.redirect('/facility-management/search-past-transactions/search-results')
})

/* The code below this line ensures that the tabs work. You can remove it if you want the default prototype kit */
const { useStructure, pathPattern } = require('govuk-prototype-kit-tabs-interface')
router.get('/', (req, res) => res.render('index.html'))
router.get(pathPattern, useStructure, () => null)
/* The code above this line ensures that the tabs work. You can remove it if you want the default prototype kit */

// Add your routes here

router.get('/assets/images/icon-tag-remove-cross.svg', (req, res) => {
  const options = {
        root: path.join(__dirname)
    }
    const fileName = '/assets/images/icon-tag-remove-cross.svg';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err);
        } else {
            // console.log('Sent:', fileName);
        }
    });
})
