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

# 3_controllers:
    (Using REST API)
    => in order to have an api you need to have some kind of routes
        e.g:
            - GET /ninjas => return a collection of ninjas [] (a single route)
            - GET /ninjas/:id => return a single ninja
            - POST /ninjas => creates ninjas
            - PUT /ninjas/:id => update
            - DELETE /ninjas/:id => delete a ninja
    => Controllers are in change of defining the paths and http methods
    => @Controller('ninjas'): anything within this controller is gonna have that prefix ('ninjas')
    => Controllers are responsible for handling incoming requests and returning responses to the client.
    =>Decorators for methods.
    =>We need to parse the request body in post() (use of DTO)

# 4_providers(services):
    => Controllers should handle HTTP requests and delegate more complex tasks to providers. Providers are plain JavaScript classes that are declared as providers in a module.
    =>the logic of the controllers.
    =>has @Injectable() decorator (the provider can be injected into any class that depends on it)
    
# 5_ErrorHandling:
    => Throw exceptions => try catch (you can build your own)
    => Use exception filters @Catch(HttpException)