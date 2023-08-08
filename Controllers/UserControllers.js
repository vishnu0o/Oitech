const images=require('../public/js/carousel')
module.exports={

    GetHomepage:async(req,res)=>{
        try{
         res.render('Home',)
        }catch(err){

        }
    },

    GetHome1page:async(req,res)=>{
        try{
         res.render('Home1',{images})
        }catch(err){

        }
    },
    GetHome2page:async(req,res)=>{
        try{
          res.render('Home2')
        }catch(err){

        }
    },
    GetHome3page:async(req,res)=>{
        try{
          res.render('Home3')
        }catch(err){

        }
    },
    GetHome4page:async(req,res)=>{
        try{
          res.render('Home4')
        }catch(err){

        }
    },
    GetHome5page:async(req,res)=>{
        try{
          res.render('Home5')
        }catch(err){

        }
    },
    GetAboutPage:async(req,res)=>{
        try{
            res.render('About')
        }catch(err){

        }
    },
    GetProjects:async(req,res)=>{
        try{
            res.render('Project')
        }catch(err){

        }
    },
    GetProjectsDeatials:async(req,res)=>{
        try{
            res.render('ProjectDeatial')
        }catch(err){

        }
    },
    Get404page:async(req,res)=>{
        try{
           res.render('404')
        }catch(err){
        }
    },
    GetTestimonials:async(req,res)=>{
        try{
            res.render('Testimonials')
        }catch(err){

        }
    },
    GetPricing:async(req,res)=>{
        try{
            res.render('Pricing')
        }catch(err){

        }
    },
    GetFAQ:async(req,res)=>{
        try{
            res.render('FAQ')
        }catch(err){

        }
    },
    GetService:async(req,res)=>{
        try{
            res.render('Service')
        }catch(err){

        }
    },
    GetServiceDestials:async(req,res)=>{
        try{
            res.render('ServiceDetias')
        }catch(err){

        }
    },
    Get404:async(req,res)=>{
        try{
            res.render('404')
        }
        catch(err){

        }
    },
    Getcontact:async(req,res)=>{
        try{
            res.render('contact')
        }
        catch(err){

        }
    },
    Getfaq:async(req,res)=>{
        try{
            res.render('faq')
        }
        catch(err){
        }
    },
    Getnewsdetails:async(req,res)=>{
        try{
            res.render('news-details')
        }
        catch(err){
        }
    },
    Getnewsgrid:async(req,res)=>{
        try{
            res.render('news-grid')
        }
        catch(err){
        }
    },
    Getpricing:async(req,res)=>{
        try{
            res.render('pricing')
        }
        catch(err){
        }
    },
    GetProjectsDeatials:async(req,res)=>{
        try{
            res.render('project-details')
        }
        catch(err){
        }
    },
    Getprojects:async(req,res)=>{
        try{
            res.render('projects')
        }
        catch(err){
        }
    },
    Getservicedetails:async(req,res)=>{
        try{
            res.render('service-details')
        }
        catch(err){
        }
    },
    Getservices:async(req,res)=>{
        try{
            res.render('services')
        }
        catch(err){
        }
    },
    Getteamdetails:async(req,res)=>{
        try{
            res.render('team-details')
        }
        catch(err){
        }
    },
    Getteam:async(req,res)=>{
        try{
            res.render('team')
        }
        catch(err){
        }
    },
    Gettestimonial:async(req,res)=>{
        try{
            res.render('testimonial')
        }
        catch(err){
        }
    },



}