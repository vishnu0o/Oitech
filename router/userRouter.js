const express=require('express')
const router=express.Router()
const {GetHome1page,GetHome2page, GetHome3page, GetHome4page, GetHome5page, GetAboutPage, Get404, Getcontact, Getfaq, GetHomepage, Getnewsdetails, Getnewsgrid, Getpricing, GetProjectsDeatials, Getprojects, Getservicedetails, Getservices, Getteamdetails, Getteam, Gettestimonial}=require('../Controllers/UserControllers')
router.route('/').get(GetHome1page)
router.route('/home3').get(GetHome3page)
router.route('/home4').get(GetHome4page)
router.route('/home5').get(GetHome5page)
router.route('/about').get(GetAboutPage)
router.route('/404').get(Get404)
router.route('/contact').get(Getcontact)
router.route('/faq').get(Getfaq)
router.route('/home').get(GetHomepage)
router.route('/news-details').get(Getnewsdetails)
router.route('/news-grids').get(Getnewsgrid)
router.route('/pricing').get(Getpricing)
router.route('/project-details').get(GetProjectsDeatials)
router.route('/projects').get(Getprojects)
router.route('/service-details').get(Getservicedetails)
router.route('/services').get(Getservices)
router.route('/team-details').get(Getteamdetails)
router.route('/team').get(Getteam)
router.route('/testmonial').get(Gettestimonial)













module.exports=router