package controllers

import (
	"github.com/astaxie/beego"
)

type MainController struct {
	beego.Controller
}

func (c *MainController) Get() {
	c.TplName = "index.html"
}


func (c *MainController) Post() {
	name := c.GetString("name")
	password := c.GetString("password")

	if name == "b" && password == "p" {
		c.Ctx.Redirect(302,"/users")
	} else {
		c.Ctx.WriteString("Wrong user name or password")
	}
}