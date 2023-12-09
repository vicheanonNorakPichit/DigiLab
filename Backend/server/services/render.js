exports.homeRoutes = (req, res) => {
    res.render("index");
}

exports.add_subject = (req, res) => {
    res.render('./include/subject/add_subject')
}

exports.update_subject = (req, res) => {
    res.render('./include/subject/update_subject')
}