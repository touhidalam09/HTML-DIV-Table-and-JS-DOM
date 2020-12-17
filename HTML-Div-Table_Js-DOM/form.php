<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        
        <link rel="icon" href="img/demo_icon.gif" type="image/gif" sizes="16x16">
        <title>Form Table</title>
        <link rel="stylesheet" href="form.css">
    </head>
    <body>
        <div class="container">
            <!--three sibling divs --Header,Body,Footer-- into this div-->
            <div class="header">
                <div class="logo">
                    <img class="logo-img" src="img/tomcat.png" alt="no image">
                </div>
                <div class="company-name">
                    <h2 class="brand-name">
                        Swapnoloke
                    </h2>
                </div>
            </div>
            <div class="body">
                <!--two sibling divs --menu-bar, welcome-dashboard-- into this div-->
                <div class="menu-bar">
                    <a class="btn" href="index.php">Home Div</a>
                    <a class="btn" href="designWithJs.php">Home Div JS</a>
                    <a class="btn" href="form.php">Form Table</a>
                    <a class="btn" href="formWithJS.php">Form Table JS</a>
                    <a class="btn" href="mainIndex.php">File Include</a>
                    <a class="btn" href="about.php">About</a>
                    <a class="btn" href="#">LogOut</a>
                    <a class="btn" href="#">Contract</a>
                </div>

                <div class="form-body-div">
                    <h2 class="form-title">Form</h2>

                    <div class="all-intype-div">
                        <center class="center-body-div">

                            <table class="input-table">
                                <tbody class="table-body">
                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="userName">User Name:</label>
                                        </td>
                                        <td valign="center" >
                                            <input type="text" id="userName" name="user_Name"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="fatherName">Father's Name:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="text" id="fatherName" name="father_Name"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="motherName">Mother's Name:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="text" id="motherName" name="mother_Name"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="email">Email:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="email" id="email" name="email"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="password">password:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="password" id="password" name="password"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="gender">Gender:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="radio" id="gender" name="gender" value="Male"/>Male
                                            <input type="radio" id="gender" name="gender" value="Female"/>Female
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="mcq">Coding ??</label>
                                        </td>
                                        <td valign="center">
                                            <input type="checkbox" id="mcq" name="mcq" value="Like"/> Like
                                            <input type="checkbox" id="mcq" name="mcq" value="Copy Paste"/> Copy Paste
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="skillVolume">Skill:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="range" id="skillVolume" name="skillVolume" min="0" max="100" step="10"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="birthday">BirthDay:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="date" id="birthday" name="birthday"/>
                                        </td>
                                    </tr>

                                    <tr class="table-row">
                                        <td valign="center">
                                            <label for="time">Select Time:</label>
                                        </td>
                                        <td valign="center">
                                            <input type="time" id="time" name="time"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </center>
                    </div>

                </div>

            </div>

            <div class="div-footer">
                <p class="footer-para">CopyRight &copy; SwapnoLoke 2020</p>
            </div>
        </div>

    </body>
</html>
