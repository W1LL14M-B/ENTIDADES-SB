


dontev.config()

export const register = async(req , res ) => {

const {username, password, role } = req.body;

const hashedPassword  = await bcrypt( password, 10);

try {

    const [rows] = await pool.query(
     
     'INSERT INTO users ( username, password, role)  VALUES(?,?,?)',
     [username, hashedPassword, role || 'user' ]
    );
    res.status(201).json({message: 'Usuario registrado'});


    }  catch (error) {
        res.status(500).json({error: 'Error al registrar usuiario'})

    }


} 

export const login = async (req, res) => {
    
    const {username, password} = req.body;
    
    try {
        
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

        const user = rows[0];  
        
        if (!user || !( await bcrypt.compare(password, user.password))){
        return res.status(401).json({error: 'Credenciales incorrectas'});
        }
    

        const toquen = jwt.sign(
        {id: user.id, username: user.username, role: user.role},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
        );

        res.json ({token});


    } catch (error) {
        res.status(500).json({error: 'Error al iniciar sesión'});
    }

 } 

export const profile = async (req, res) => {
    res.json({ user: req.user});
}



