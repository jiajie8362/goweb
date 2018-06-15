package main

import (
	"net/http"
)

func login(writer http.ResponseWriter, request *http.Request) {
	t := parseTemplateFiles("login.layout", "public.navbar", "login")
	t.Execute(writer, nil)
}

func signup(writer http.ResponseWriter, request *http.Request) {

}

func signupAccount(writer http.ResponseWriter, request *http.Request) {

}

func authenticate(writer http.ResponseWriter, request *http.Request) {

}

func logout(writer http.ResponseWriter, request *http.Request) {

}
