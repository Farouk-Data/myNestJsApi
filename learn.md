# 1_intro:

    Request: 
        HTTP GET / => controller => service
    Response: 
                   <=              <=
    => Controllers are defining the routes/HTTP verbs(methods) we are using for those routes.
        -> those methods call services.
        -> services have the logic you wanna use.

# 2_modules:

    => AppModule as root of the app.
    => Modules are a way to group and encapsulates a set of capabilities (each module for a feature in a project)
    => Module for users, groups...
    => Dependency of modules(tree structure)
    