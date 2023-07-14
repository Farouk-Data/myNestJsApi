# 1intro
    Request: 
        HTTP GET / => controller => service
    Response: 
                   <=              <=
    => Controllers are defining the routes/HTTP verbs(methods) we are using for those routes.
        -> those methods call services.
        -> services have the logic you wanna use.